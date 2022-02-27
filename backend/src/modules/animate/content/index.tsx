import { ContentLayout } from '@/common/layouts/ContentLayout';

export const App: React.FC = props => {
  return (
    <ContentLayout title="list" arrow>
      <div style={{ height: '1600px' }}>animate</div>
    </ContentLayout>
  );
};
