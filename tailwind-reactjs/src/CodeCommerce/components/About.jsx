import React from 'react';
import AboutCard from '../components/AboutCard';
import {
  AcademicCapIcon,
  ChartPieIcon,
  PaperAirplaneIcon,
  MapIcon,
} from '@heroicons/react/outline';

const listCard = [
  {
    heading: 'Reliable, tamper-proof network',
    text: 'Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.',
    icon: <AcademicCapIcon className="w-16 h-16" />,
  },
  {
    heading: 'Seamless connection to any API',
    text: 'Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.',
    icon: <ChartPieIcon className="w-16 h-16" />,
  },
  {
    heading: 'Proven, ready-made solutions',
    text: 'Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.',
    icon: <PaperAirplaneIcon className="w-16 h-16" />,
  },
  {
    heading: 'Secure off-chain computation',
    text: 'Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.',
    icon: <MapIcon className="w-16 h-16" />,
  },
];

export default function About() {
  return (
    <div className="w-full bg-black text-white text-center">
      <div className="max-w-1240 mx-auto px-4 py-16">
        <div>
          <h1 className="py-4">A Growing Protocol Ecosystem</h1>
          <p className="py-4 text-xl">
            The Defi protocol system empowers developers, liquidity
            providers, and traders to participate in a financial
            marketplace that is open and accessible to all.
          </p>

          {/* grid card */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {listCard.map((card) => (
              <AboutCard
                heading={card.heading}
                text={card.text}
                icon={card.icon}
                key={card.heading}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
