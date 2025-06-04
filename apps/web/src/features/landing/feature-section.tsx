import {
  Building,
  Users,
  MessageSquare,
  Calendar,
  Kanban,
  Video,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything your agency needs in one place
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our platform offers a comprehensive suite of tools designed to help
            agencies manage their teams and projects efficiently.
          </p>
        </div>

        <Tabs defaultValue="agencies" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full max-w-3xl">
              <TabsTrigger
                value="agencies"
                className="flex flex-col items-center gap-2 py-3"
              >
                <Building className="h-5 w-5" />
                <span className="hidden md:inline">Agencies</span>
              </TabsTrigger>
              <TabsTrigger
                value="teams"
                className="flex flex-col items-center gap-2 py-3"
              >
                <Users className="h-5 w-5" />
                <span className="hidden md:inline">Teams</span>
              </TabsTrigger>
              <TabsTrigger
                value="chat"
                className="flex flex-col items-center gap-2 py-3"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="hidden md:inline">Chat</span>
              </TabsTrigger>
              <TabsTrigger
                value="calendar"
                className="flex flex-col items-center gap-2 py-3"
              >
                <Calendar className="h-5 w-5" />
                <span className="hidden md:inline">Calendar</span>
              </TabsTrigger>
              <TabsTrigger
                value="kanban"
                className="flex flex-col items-center gap-2 py-3"
              >
                <Kanban className="h-5 w-5" />
                <span className="hidden md:inline">Kanban</span>
              </TabsTrigger>
              <TabsTrigger
                value="meet"
                className="flex flex-col items-center gap-2 py-3"
              >
                <Video className="h-5 w-5" />
                <span className="hidden md:inline">Meet</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="agencies" className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-2xl font-bold">
                  Create and manage multiple agencies
                </h3>
                <p className="text-muted-foreground">
                  Set up separate workspaces for each agency or client, with
                  custom branding, team members, and project structures.
                </p>
                <ul className="space-y-3">
                  {[
                    "Multiple agency workspaces",
                    "Custom branding and settings",
                    "Agency-level permissions",
                    "Detailed analytics and reporting",
                    "Centralized resource management",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button>Create Your First Agency</Button>
              </div>
              <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-lg border">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Agency Management"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="teams" className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-lg border order-2 lg:order-1">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team Management"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="lg:col-span-2 space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl font-bold">
                  Organize teams and projects efficiently
                </h3>
                <p className="text-muted-foreground">
                  Create project teams with the right people, assign roles, and
                  keep everything organized in one place.
                </p>
                <ul className="space-y-3">
                  {[
                    "Flexible team structures",
                    "Role-based permissions",
                    "Project grouping and categorization",
                    "Resource allocation",
                    "Team performance analytics",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button>Explore Team Management</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="chat" className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-2xl font-bold">
                  Real-time team communication
                </h3>
                <p className="text-muted-foreground">
                  Chat with your team in real-time, share files, and keep all
                  project communication in context.
                </p>
                <ul className="space-y-3">
                  {[
                    "Instant messaging",
                    "File sharing and previews",
                    "Thread-based discussions",
                    "Search and history",
                    "Notifications and mentions",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button>Try Chat Interface</Button>
              </div>
              <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-lg border">
                <img
                  src="https://images.pexels.com/photos/3182822/pexels-photo-3182822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Chat Interface"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-lg border order-2 lg:order-1">
                <img
                  src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Calendar Interface"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="lg:col-span-2 space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl font-bold">
                  Schedule and track important dates
                </h3>
                <p className="text-muted-foreground">
                  Keep track of deadlines, meetings, and important milestones
                  with our intuitive calendar interface.
                </p>
                <ul className="space-y-3">
                  {[
                    "Visual calendar interface",
                    "Event scheduling and reminders",
                    "Recurring events",
                    "Integration with tasks",
                    "Multiple calendar views",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button>Explore Calendar</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="kanban" className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-2xl font-bold">
                  Real-time task management
                </h3>
                <p className="text-muted-foreground">
                  Visualize your workflow with our real-time kanban board,
                  making it easy to track progress and manage tasks.
                </p>
                <ul className="space-y-3">
                  {[
                    "Customizable board layouts",
                    "Real-time updates across devices",
                    "Task prioritization",
                    "Assignee and due date tracking",
                    "Automated workflows",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button>Try Kanban Board</Button>
              </div>
              <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-lg border">
                <img
                  src="https://images.pexels.com/photos/3153207/pexels-photo-3153207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Kanban Board"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="meet" className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-lg border order-2 lg:order-1">
                <img
                  src="https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Virtual Meeting Room"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="lg:col-span-2 space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl font-bold">Virtual meeting rooms</h3>
                <p className="text-muted-foreground">
                  Connect with your team face-to-face through our integrated
                  video meeting rooms, no additional software needed.
                </p>
                <ul className="space-y-3">
                  {[
                    "HD video conferencing",
                    "Screen sharing",
                    "Recording capabilities",
                    "Chat during meetings",
                    "Meeting scheduling",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button>Start a Meeting</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
