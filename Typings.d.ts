interface NavDataType {
  title: string;
  path: string;
  icon: React.ReactNode;
}

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (state: boolean) => void;
  isAuth: boolean;
  setIsAuth: (state: boolean) => void;
}

interface DateFormatterProps {
  current: boolean;
  date?: string;
}

interface dataArray {
  index: number;
  gameResultPatti: number;
  gameNumber: number;
  _id: string;
}

interface LatestUpdateDataType {
  _id: string;
  date: string;
  data: dataArray[];
  __v: number;
  createdAt: string;
}

interface RepeatPattiType {
  _id: string;
  repeatPatti: RepeatPattiTypeSub[];
  __v: number;
}
