import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Tabs from "./Tabs";

const Profile = () => {
  return (
    <div>
      <img
        src="https://via.assets.so/img.jpg?w=1500&h=400"
        alt="Profile Banner"
        className="w-full object-cover"
      />
      <section className="flex items-center gap-5 p-4">
        <Avatar className="h-auto w-44 border-2 border-foreground">
          <AvatarImage src="https://avatars.githubusercontent.com/u/88037615?v=4" />
          <AvatarFallback>YA</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="prose-2xl">Yasseen Ar Web Dev</h1>
          <p className="prose-sm text-foreground">
            Front-end Web Dev using React
          </p>
          <p className="prose-base mt-4 text-pretty text-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            perferendis inventore reprehenderit? Suscipit saepe aliquid
            laudantium commodi deleniti culpa voluptates quas, impedit
            laboriosam illo provident repellat dignissimos magni iusto tempore?
          </p>
          <Button
            className={cn("mt-4", buttonVariants({ variant: "default" }))}
            asChild
          >
            <a href="https://t.me/Yasseen_AR_WebDev">Contact Me</a>
          </Button>
        </div>
      </section>
      <section>
        <Tabs />
      </section>
    </div>
  );
};

export default Profile;
