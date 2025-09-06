import React from 'react';
import { Plus, Calendar, Users, CheckSquare, MessageSquare, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ProjectCard {
  id: string;
  name: string;
  description: string;
  members: Array<{ name: string; avatar?: string }>;
  tasks: {
    todo: number;
    inProgress: number;
    done: number;
  };
  dueDate?: string;
}

const mockProjects: ProjectCard[] = [
  {
    id: '1',
    name: 'E-commerce Platform',
    description: 'Complete e-commerce solution with payment gateway (₹45L budget)',
    members: [
      { name: 'Arjun Sharma', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=arjun' },
      { name: 'Priya Patel', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya' },
      { name: 'Rahul Gupta' },
    ],
    tasks: { todo: 8, inProgress: 3, done: 12 },
    dueDate: '2024-02-15'
  },
  {
    id: '2',
    name: 'Digital Marketing Campaign',
    description: 'Festival season campaign with ₹12L marketing budget',
    members: [
      { name: 'Kavya Reddy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kavya' },
      { name: 'Aditya Singh' },
    ],
    tasks: { todo: 5, inProgress: 2, done: 8 },
    dueDate: '2024-01-30'
  },
  {
    id: '3',
    name: 'Fintech Mobile App',
    description: 'UPI-based payment app with ₹75L development cost',
    members: [
      { name: 'Vikram Joshi', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram' },
      { name: 'Shreya Agarwal', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=shreya' },
      { name: 'Ravi Kumar' },
      { name: 'Ananya Mehta' },
    ],
    tasks: { todo: 15, inProgress: 7, done: 5 },
    dueDate: '2024-03-20'
  },
];

export const DashboardPage: React.FC = () => {
  const totalProjects = mockProjects.length;
  const totalTasks = mockProjects.reduce((acc, project) => 
    acc + project.tasks.todo + project.tasks.inProgress + project.tasks.done, 0
  );
  const completedTasks = mockProjects.reduce((acc, project) => acc + project.tasks.done, 0);
  const inProgressTasks = mockProjects.reduce((acc, project) => acc + project.tasks.inProgress, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your projects.
          </p>
        </div>
        <Button className="gradient-primary sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover-lift">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProjects}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+2</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalTasks}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+12</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inProgressTasks}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-warning">+3</span> this week
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedTasks}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+8</span> this week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Projects Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <Card key={project.id} className="hover-lift cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {project.description}
                    </CardDescription>
                  </div>
                  {project.dueDate && (
                    <Badge variant="outline" className="text-xs">
                      Due {new Date(project.dueDate).toLocaleDateString()}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {/* Task Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">
                      {Math.round((project.tasks.done / (project.tasks.todo + project.tasks.inProgress + project.tasks.done)) * 100)}%
                    </span>
                  </div>
                  
                  <div className="flex gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-muted"></div>
                      <span>{project.tasks.todo} To-Do</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-warning"></div>
                      <span>{project.tasks.inProgress} In Progress</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span>{project.tasks.done} Done</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-success h-2 rounded-full transition-all"
                      style={{ 
                        width: `${(project.tasks.done / (project.tasks.todo + project.tasks.inProgress + project.tasks.done)) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>

                {/* Team Members */}
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Team</span>
                    <div className="flex -space-x-2">
                      {project.members.slice(0, 3).map((member, index) => (
                        <Avatar key={index} className="h-8 w-8 border-2 border-background">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                            {member.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      {project.members.length > 3 && (
                        <div className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                          <span className="text-xs font-medium">+{project.members.length - 3}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};