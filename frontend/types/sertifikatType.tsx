interface Sertifikat {
  key?: string;
  id: string;
  title: string;
  image: string;
}

interface SertifikatPageProps {
  sertifikatData: Sertifikat[];
  currentPage: number;
  totalCount: number;
  perPage: number;
}

interface AddSertifikatProps {
  open: boolean;
  onSubmit: (newData: Sertifikat) => void;
  onCancel: () => void;
}
