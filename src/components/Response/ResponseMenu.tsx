import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import ResponsePreview from '@/components/Response/ResponsePreview';
import ResponseHeaders from '@/components/Response/ResponseHeaders';

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

      <TabsContent value='preview'>
        <ResponsePreview />
      </TabsContent>
      <TabsContent value='headers'>
        <ResponseHeaders />
      </TabsContent>
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
