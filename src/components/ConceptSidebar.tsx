import { BookOpen, Target, FileText, DollarSign, Mail } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const sections = [
  { title: "Introduction", icon: BookOpen, id: "introduction" },
  { title: "Purpose", icon: Target, id: "purpose" },
  { title: "Description", icon: FileText, id: "description" },
  { title: "Budget", icon: DollarSign, id: "budget" },
  { title: "Contact", icon: Mail, id: "contact" },
];

interface ConceptSidebarProps {
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export function ConceptSidebar({ activeSection, onSectionClick }: ConceptSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="space-y-1">
            <h1 className="text-lg font-serif font-bold text-sidebar-foreground tracking-tight">
              Concept Paper
            </h1>
            <p className="text-xs text-sidebar-foreground/60">
              Project Proposal Document
            </p>
          </div>
        )}
        {collapsed && (
          <div className="flex justify-center">
            <span className="text-sidebar-foreground font-serif font-bold text-lg">C</span>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 uppercase text-[10px] tracking-widest">
            Sections
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => onSectionClick(item.id)}
                      className={`transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                      }`}
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
