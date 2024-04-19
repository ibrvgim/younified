import DocumentsCard from '../../components/HomeScreen/DocumentsCard';
import DocumentsWindow from '../../components/HomeScreen/DocumentsWindow';

function TutorialsScreen() {
  return (
    <DocumentsWindow>
      <DocumentsCard fileName='union_collections.pdf' />
      <DocumentsCard fileName='tax_return.xlsx' />
      <DocumentsCard fileName='invoices.pdf' />
      <DocumentsCard fileName='image_0678.png' />
      <DocumentsCard fileName='quarter.doc' />
    </DocumentsWindow>
  );
}

export default TutorialsScreen;
