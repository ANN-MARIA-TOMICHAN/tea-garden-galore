
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Emily Chen',
      position: 'Tea Sommelier & Founder',
      bio: 'With over 15 years of experience in the tea industry, Emily has traveled the world to source the finest teas.',
      imageUrl: 'assets/images/team-member-1.jpg'
    },
    {
      name: 'James Wilson',
      position: 'Master Blender',
      bio: 'James creates our signature tea blends, combining traditional techniques with innovative flavors.',
      imageUrl: 'assets/images/team-member-2.jpg'
    },
    {
      name: 'Sarah Thompson',
      position: 'Quality Control Specialist',
      bio: 'Sarah ensures that every batch of tea meets our strict quality standards before reaching our customers.',
      imageUrl: 'assets/images/team-member-3.jpg'
    }
  ];
}
