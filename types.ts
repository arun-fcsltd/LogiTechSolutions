import React from 'react';

export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SERVICES = 'SERVICES',
  PRODUCTS = 'PRODUCTS',
  INDUSTRIES = 'INDUSTRIES',
  TECHNOLOGIES = 'TECHNOLOGIES',
  PORTFOLIO = 'PORTFOLIO',
  CONTACT = 'CONTACT',
  BLOG = 'BLOG',
  CAREERS = 'CAREERS',
  LOGIN = 'LOGIN'
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  image: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  challenges: string[];
  solutions: string[];
  image: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Mobile';
  description: string;
  useCases: string[];
  icon: React.ReactNode;
}

export interface ProductItem {
  name: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}
