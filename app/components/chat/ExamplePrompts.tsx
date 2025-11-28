import React from 'react';

const EXAMPLE_PROMPTS = [
  { text: 'Build a Beer Game supply chain management simulation' },
  { text: 'Create a city management simulation with population, economy and resources' },
  { text: 'Create a startup management simulation with hiring, burn rate and revenue' },
  { text: 'Build a hospital management simulation with patients and staff scheduling' },
  { text: 'Make a restaurant tycoon game with inventory, staff and customer flow' },
  { text: 'Create a factory production line simulation with bottleneck detection' },
  { text: 'Build a farm management simulation with crops, seasons and equipment' },
  { text: 'Create an airport management simulation with flights, gates and delays' },
  { text: 'Make a hotel management simulation with bookings, rooms and staff' },
  { text: 'Build a logistics and fleet management simulation with routing optimization' },
  { text: 'Create a retail store management simulation with demand forecasting' },
  { text: 'Make a theme park management simulation with rides, visitors and finances' },
  { text: 'Build an energy grid management simulation with power generation balancing' },
  { text: 'Create a mining operation simulation with equipment, workers and yield' },
  { text: 'Make a shipping port management simulation with cargo flow and cranes' },
];

export function ExamplePrompts(sendMessage?: { (event: React.UIEvent, messageInput?: string): void | undefined }) {
  return (
    <div id="examples" className="relative flex flex-col gap-9 w-full max-w-3xl mx-auto flex justify-center mt-6">
      <div
        className="flex flex-wrap justify-center gap-2"
        style={{
          animation: '.25s ease-out 0s 1 _fade-and-move-in_g2ptj_1 forwards',
        }}
      >
        {EXAMPLE_PROMPTS.map((examplePrompt, index: number) => {
          return (
            <button
              key={index}
              onClick={(event) => {
                sendMessage?.(event, examplePrompt.text);
              }}
              className="border border-bolt-elements-borderColor rounded-full bg-gray-50 hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-900 text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary px-3 py-1 text-xs transition-theme"
            >
              {examplePrompt.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}
