import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function ResponseMenuTabs() {
  return (
    <Tabs
      defaultValue='preview'
      className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='preview'>Preview</TabsTrigger>
        <TabsTrigger value='headers'>Headers</TabsTrigger>
        <TabsTrigger value='cookies'>Cookies</TabsTrigger>
      </TabsList>

      <TabsContent value='preview'>JSON Preview</TabsContent>
      <TabsContent value='headers'>Headers table</TabsContent>
      <TabsContent value='cookies'>Cookies table</TabsContent>
    </Tabs>
  );
}

function ResponseMenu() {
  return (
    <>
      <ResponseMenuTabs />
    </>
  );
}

export default ResponseMenu;
