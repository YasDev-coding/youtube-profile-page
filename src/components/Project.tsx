import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { SquareArrowOutUpRight } from "lucide-react";

const Project = () => {
  return (
    <Card>
      <CardHeader>
        <img
          src="https://via.assets.so/img.jpg?w=400&h=300"
          alt=""
          className="mb-2 h-auto w-[400px] rounded"
        />
        <CardTitle>Amazing Project</CardTitle>
        <CardDescription>Project Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Cool Project in React</p>
      </CardContent>
      <CardFooter>
        <a className={cn(buttonVariants({ variant: "link" }))} href="#">
          Learn More <SquareArrowOutUpRight size={16} color="#ffffff" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default Project;
