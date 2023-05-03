interface Artikel {
  key?: string;
  id?: string;
  title: string;
  content: string;
  image: File | null | undefined;
}

interface ArtikelPageProps {
  artikelData: Artikel[];
  currentPage: number;
  totalCount: number;
  perPage: number;
}

interface AddArtikelProps {
  open: boolean;
  onSubmit: (data: Artikel) => void;
  onCancel: () => void;
}
