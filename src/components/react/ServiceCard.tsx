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
    <Card className="relative ring-2 ring-[#522c5f] w-full ring-offset-2 ring-offset-black transform transition-all hover:scale-[101%] cursor-default">
      <CardHeader>
        <CardTitle className="flex flex-col justify-center items-center gap-2">
          <Icon name={service.icon} size={48} />
          <span className="text-xl font-bold text-black">{service.title}</span>
        </CardTitle>
        <CardDescription className="text-center text-base">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        {/* <p className="text-lg text-black">{service.longDescription}</p> */}
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full">
          En savoir plus
        </Button>
      </CardFooter>
    </Card>
  )
}
