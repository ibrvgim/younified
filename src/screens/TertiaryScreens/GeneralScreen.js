import DocumentsCard from '../../components/HomeScreen/DocumentsCard';
import DocumentsWindow from '../../components/HomeScreen/DocumentsWindow';

function TutorialsScreen() {
  return (
    <DocumentsWindow>
      <DocumentsCard fileName='tutorials.ppt' />
      <DocumentsCard fileName='projects.xlsx' />
      <DocumentsCard fileName='deadlines.pdf' />
      <DocumentsCard fileName='incomes.xlsx' />
      <DocumentsCard fileName='lists.doc' />
      <DocumentsCard fileName='employers.xlsx' />
    </DocumentsWindow>
  );
}

export default TutorialsScreen;
