import React, { useState, useCallback } from 'react';

// Import all section components
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import RegisteredUsersSection from '../components/RegisteredUsersSection';
import CurrentlyActiveUsersSection from '../components/CurrentlyActiveUsersSection';
import ConnectWorldSection from '../components/ConnectWorldSection';
import ReviewsSection from '../components/ReviewsSection';
import GetStartedSection from '../components/GetStartedSection';
import FooterSection from '../components/FooterSection';
import LearningPathModal from '../components/LearningPathModal';

// This is the page component that assembles all the sections.
export default function LandingPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const generateLearningPath = useCallback(async (goal) => {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        const systemPrompt = "You are an expert curriculum and learning path designer. A user will provide a learning goal. Create a concise, logical, step-by-step learning path to help them achieve it. Provide between 5 to 8 steps. For each step, provide a clear title, a brief 1-2 sentence description, and an array of relevant skill tags.";
        
        const payload = {
            systemInstruction: { parts: [{ text: systemPrompt }] },
            contents: [{ parts: [{ text: `My learning goal is: "${goal}"` }] }],
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "OBJECT",
                    properties: {
                        "learning_path": {
                            "type": "ARRAY",
                            "items": {
                                "type": "OBJECT",
                                "properties": {
                                    "step": { "type": "NUMBER" },
                                    "title": { "type": "STRING" },
                                    "description": { "type": "STRING" },
                                    "skill_tags": {
                                        "type": "ARRAY",
                                        "items": { "type": "STRING" }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        
        // This logic handles the API call, including retries with exponential backoff.
        let attempt = 0;
        const maxRetries = 3;
        while (attempt < maxRetries) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                
                if (result.candidates && result.candidates[0].content?.parts?.[0]?.text) {
                     const jsonText = result.candidates[0].content.parts[0].text;
                     return JSON.parse(jsonText);
                } else {
                    throw new Error("Could not parse a valid learning path from the API response.");
                }

            } catch (error) {
                console.error(`Attempt ${attempt + 1} failed:`, error);
                attempt++;
                if (attempt >= maxRetries) throw error;
                await new Promise(res => setTimeout(res, 1000 * Math.pow(2, attempt)));
            }
        }
        throw new Error("Failed to generate learning path after multiple retries.");
    }, []);

    return (
        <>
            <main>
                <HeroSection />
                <SkillsSection />
                <RegisteredUsersSection />
                <CurrentlyActiveUsersSection />
                <ConnectWorldSection />
                <ReviewsSection />
                <GetStartedSection onOpenModal={() => setIsModalOpen(true)} />
            </main>
            <FooterSection />
            
            <LearningPathModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            generateLearningPath={generateLearningPath} // Correct prop name
        />
        </>
    );
}
