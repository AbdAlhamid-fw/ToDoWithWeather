import { Wizard } from '../../components/wizard/index'
import Setting from './setting';
import "./index.css";

interface Props {
    
}

export const Initial: React.FC<Props> = (props: Props) => {
  const steps: {
    title?: string;
    subTitle?: string;
    description?: string;
  }[] = [
    {
      title: "LogIn",
    },
    {
      title: "Setting",
    },
  ];
  return (
    <div className="initial">
      <Setting />
      <Wizard steps={steps} />
    </div>
  );
};
