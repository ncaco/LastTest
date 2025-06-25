import ReqConfirmation from './software-development/req-confirmation';
import IoImplementation from './software-development/io-implementation';
import IntegrationImplementation from './software-development/integration-implementation';
import ServerImplementation from './software-development/server-implementation';
import InterfaceImplementation from './software-development/interface-implementation';

import LogicalDbDesign from './database-construction/logical-db-design';
import PhysicalDbDesign from './database-construction/physical-db-design';
import SqlUtilization from './database-construction/sql-utilization';

import BasicSyntax from './programming-language-utilization/basic-syntax';
import DataStructure from './programming-language-utilization/data-structure';
import AlgorithmImplementation from './programming-language-utilization/algorithm-implementation';

import SoftwareMethodology from './information-system-management/software-methodology';
import ItProjectManagement from './information-system-management/it-project-management';
import SoftwareEngineering from './information-system-management/software-engineering';

import NewTechTrends from './new-technology-security/new-tech-trends';
import InfoSecurityTech from './new-technology-security/info-security-tech';
import SystemSecurityConstruction from './new-technology-security/system-security-construction';

import Exam2025First from './information-processing-exam/2025-1st';
import Exam2024Third from './information-processing-exam/2024-3rd';
import Exam2024Second from './information-processing-exam/2024-2nd';
import Exam2024First from './information-processing-exam/2024-1st';
import Exam2023First from './information-processing-exam/2023-1st';

interface PageComponents {
  [key: string]: React.FC;
}

export const pageComponents: PageComponents = {
  'req-confirmation': ReqConfirmation,
  'io-implementation': IoImplementation,
  'integration-implementation': IntegrationImplementation,
  'server-implementation': ServerImplementation,
  'interface-implementation': InterfaceImplementation,

  'logical-db-design': LogicalDbDesign,
  'physical-db-design': PhysicalDbDesign,
  'sql-utilization': SqlUtilization,

  'basic-syntax': BasicSyntax,
  'data-structure': DataStructure,
  'algorithm-implementation': AlgorithmImplementation,

  'software-methodology': SoftwareMethodology,
  'it-project-management': ItProjectManagement,
  'software-engineering': SoftwareEngineering,

  'new-tech-trends': NewTechTrends,
  'info-security-tech': InfoSecurityTech,
  'system-security-construction': SystemSecurityConstruction,

  '2025-1st': Exam2025First,
  '2024-3rd': Exam2024Third,
  '2024-2nd': Exam2024Second,
  '2024-1st': Exam2024First,
  '2023-1st': Exam2023First,
}; 