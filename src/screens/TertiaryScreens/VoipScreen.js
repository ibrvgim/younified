import DocumentsCard from '../../components/HomeScreen/DocumentsCard';
import DocumentsWindow from '../../components/HomeScreen/DocumentsWindow';

function VoipScreen() {
  return (
    <DocumentsWindow>
      <DocumentsCard fileName='phones.pdf' />
      <DocumentsCard fileName='tax_income.xlsx' />
      <DocumentsCard fileName='image_1703.jpg' />
      <DocumentsCard fileName='helps.doc' />
    </DocumentsWindow>
  );
}

export default VoipScreen;
