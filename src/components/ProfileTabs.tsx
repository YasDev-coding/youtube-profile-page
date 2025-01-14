import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FolderGit2, House, Info, Phone } from "lucide-react";
import ProjectsList from "./ProjectsList";
import About from "./About";
import Contact from "./Contact";

const ProfileTabs = () => {
  return (
    <section className="px-4">
      <Tabs defaultValue="home">
        <TabsList className="w-full justify-around">
          <TabsTrigger value="home" className="space-x-2">
            <House className="text-foreground" size={16} />
            <p>Home</p>
          </TabsTrigger>
          <TabsTrigger value="about" className="space-x-2">
            <Info size={16} className="text-foreground" />
            <p>About</p>
          </TabsTrigger>
          <TabsTrigger value="projects" className="space-x-2">
            <FolderGit2 size={16} className="text-foreground" />
            <p>Projects</p>
          </TabsTrigger>
          <TabsTrigger value="contact" className="space-x-2">
            <Phone size={16} className="text-foreground" />
            <p>Contact</p>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="home">
          <ProjectsList />
        </TabsContent>
        <TabsContent value="projects">
          <ProjectsList />
        </TabsContent>
        <TabsContent value="about">
          <About />
        </TabsContent>
        <TabsContent value="contact">
          <Contact />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProfileTabs;
