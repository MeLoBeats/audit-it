import type { Service } from "index"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { Icon } from "./GenericIcon"

export const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Card className="relative ring-2 ring-[#fcf3ff] ring-offset-2 ring-offset-black transform transition-all hover:-translate-y-1 hover:-translate-x-1">
      <CardHeader>
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <Icon name={service.icon} size={48} />
      </CardContent>
      <CardFooter>
        <Button variant="default">En savoir plus</Button>
      </CardFooter>
    </Card>
  )
}
