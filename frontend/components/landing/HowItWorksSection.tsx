import React from 'react';

const steps = [
    { id: 1, title: 'Create an account', description: 'Sign up for free and verify your identity.' },
    { id: 2, title: 'Link your bank', description: 'Connect your bank account to fund your wallet.' },
    { id: 3, title: 'Start trading', description: 'Buy and sell crypto instantly.' },
];

const HowItWorksSection = () => {
    return (
        <section className="py-12 bg-gray-50 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative lg:grid lg:grid-cols-1 lg:gap-8">
                    <div className="relative">
                        <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                            How it works
                        </h3>
                        <p className="mt-3 text-lg text-gray-500">
                            Get started in minutes with our simple onboarding process.
                        </p>

                        <dl className="mt-10 space-y-10">
                            {steps.map((step) => (
                                <div key={step.id} className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white font-bold text-xl">
                                            {step.id}
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{step.title}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">{step.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
