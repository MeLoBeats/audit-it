import { icons } from "lucide-preact"
import { Icon } from "./Icon"

type ServiceCardProps = {
  icon: keyof typeof icons
  title: string
  description: string
}

const ServiceCard = ({ description, title, icon }: ServiceCardProps) => {
  return (
    <div className="service-card flex flex-col p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      {/* Logo */}
      <div className="flex bg-gray-100 w-fit h-fit rounded-full p-3 mb-4 transition-colors duration-300 hover:bg-gray-200">
        <Icon name={icon} size={32} />
      </div>

      {/* Title */}
      <h3 className="service-title text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="service-description text-gray-600">{description}</p>
    </div>
  )
}

export default ServiceCard
