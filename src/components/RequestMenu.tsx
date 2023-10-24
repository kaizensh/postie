import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function RequestMenuTabs() {
  return (
    <Tabs
      defaultValue='body'
      className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='body'>Body</TabsTrigger>
        <TabsTrigger value='headers'>Headers</TabsTrigger>
        <TabsTrigger value='query'>Query</TabsTrigger>
        <TabsTrigger value='auth'>Auth</TabsTrigger>
      </TabsList>

      <TabsContent value='body'>Body</TabsContent>
      <TabsContent value='headers'>Headers table</TabsContent>
      <TabsContent value='query'>Query table</TabsContent>
      <TabsContent value='auth'>Auth table</TabsContent>
    </Tabs>
  );
}

function RequestMenu() {
  return (
    <>
      <RequestMenuTabs />
    </>
  );
}

export default RequestMenu;
