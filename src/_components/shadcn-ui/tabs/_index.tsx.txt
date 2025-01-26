// import type { ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Raw";


// export interface BadgeProps
//   extends React.HTMLAttributes<HTMLDivElement>,
//     VariantProps<typeof badgeVariants> {}

// function Badge({ className, variant, ...props }: BadgeProps) {
// function Badge({ human, user, developer }: { human: ReactNode, user: ReactNode, developer: ReactNode }) {
function Badge() {
  return (
    <Tabs defaultValue="human" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="human">Human</TabsTrigger>
        <TabsTrigger value="user">User</TabsTrigger>
        <TabsTrigger value="developer">Developer</TabsTrigger>
      </TabsList>
      {/* <TabsContent value="human">{human}</TabsContent>
      <TabsContent value="user">{user}</TabsContent>
      <TabsContent value="developer">{developer}</TabsContent> */}
      <TabsContent value="human">humannnnn</TabsContent>
      <TabsContent value="user">userrrr</TabsContent>
      <TabsContent value="developer">developerrrr</TabsContent>
      {/* {children} */}
    </Tabs>
  )
}

export { Badge as Test1 }


