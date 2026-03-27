export interface FrameAnalysis {
  timestamp: number;
  objects: DetectedObject[];
  activities: DetectedActivity[];
  zones: ZoneState[];
}

export interface DetectedObject {
  id: string;
  class: string;
  confidence: number;
  bbox: [number, number, number, number]; // x, y, w, h
  trackId?: string;
}

export interface DetectedActivity {
  type: 'idle' | 'working' | 'moving' | 'blocked' | 'waiting';
  actorId: string;
  zone?: string;
  durationFrames: number;
}

export interface ZoneState {
  id: string;
  name: string;
  occupancy: number;
  activity: string;
  queueDepth?: number;
}

// TODO: Implement frame processing pipeline using OpenCV / AWS Rekognition
export async function processFrame(_framePath: string): Promise<FrameAnalysis> {
  throw new Error('Not implemented');
}
