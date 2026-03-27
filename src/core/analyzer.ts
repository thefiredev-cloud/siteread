export interface AnalysisJob {
  id: string;
  videoSource: string;
  vertical: 'restaurant' | 'warehouse' | 'construction' | 'retail' | 'generic';
  status: 'queued' | 'processing' | 'completed' | 'failed';
  createdAt: Date;
}

export interface AnalysisReport {
  jobId: string;
  bottlenecks: Bottleneck[];
  operationsManual: OperationsManual;
  metrics: OperationalMetrics;
  generatedAt: Date;
}

export interface Bottleneck {
  id: string;
  zone: string;
  type: 'queue' | 'idle' | 'flow' | 'capacity';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  averageDurationMinutes: number;
  frequencyPerHour: number;
  estimatedCostPerDay: number;
}

export interface OperationsManual {
  title: string;
  sections: ManualSection[];
  generatedFrom: string;
}

export interface ManualSection {
  title: string;
  procedures: string[];
  roles: string[];
  notes: string[];
}

export interface OperationalMetrics {
  averageThroughput: number;
  peakCapacity: number;
  utilizationRate: number;
  idleTimePercent: number;
  observationPeriodMinutes: number;
}
