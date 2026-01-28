import React from 'react';

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  color: 'yellow' | 'pink';
  icon: React.ReactNode;
}