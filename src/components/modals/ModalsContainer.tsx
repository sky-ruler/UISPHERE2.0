import React from 'react';
import { CodeOfConductModal } from './CodeOfConductModal';
import { HackathonRulesModal } from './HackathonRulesModal';
import { RegistrationModal } from './RegistrationModal';
import { SyllabusModal } from './SyllabusModal';
import { KrraftCodeModal } from './KrraftCodeModal';

export const ModalsContainer: React.FC = () => {
  return (
    <>
      <CodeOfConductModal />
      <HackathonRulesModal />
      <RegistrationModal />
      <SyllabusModal />
      <KrraftCodeModal />
    </>
  );
};

