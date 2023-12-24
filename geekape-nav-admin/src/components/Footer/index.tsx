import { DefaultFooter } from '@ant-design/pro-layout';
export default () => {
  const defaultMessage = '技术支持: 瞧享技术齐秦';
  return (
    <DefaultFooter
      copyright={`2023 ${defaultMessage}`}
      links={[]}
    />
  );
};
