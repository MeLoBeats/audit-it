import { BarChart, Clock } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Tag } from "./Tag"
import { Button } from "../ui/button"
import type { Formation } from "index"
import { sluggify } from "@/lib/utils"

export const FormationCard = ({ formation }: { formation: Formation }) => {
  return (
    <Card className="flex flex-col cursor-pointer items-start justify-between ring-2 ring-[#453a48] ring-offset-2 ring-offset-black transform transition-all hover:-translate-y-1 hover:-translate-x-1">
      <div>
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl font-semibold flex space-x-2 items-center space-y-2">
            {formation.title}
          </CardTitle>
          <CardDescription>{formation.description}</CardDescription>
          <div className="flex space-x-2">
            {formation.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </CardHeader>
        <CardContent className="-mt-2 space-y-1 text-sm">
          <div className="flex space-x-2 items-center">
            <BarChart size={18} />
            <p>{formation.level}</p>
          </div>
          <div className="flex space-x-2 items-center">
            <Clock size={18} />
            <p>{formation.duration}</p>
          </div>
        </CardContent>
      </div>
      <CardFooter>
        <a href={`/formations/${sluggify(formation.title)}`}>
          <Button>Accéder la formation</Button>
        </a>
      </CardFooter>
    </Card>
  )
}
