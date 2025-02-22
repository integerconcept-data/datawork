// CalendarEventROIAnalysis.ts
interface CalendarEventROIAnalysis {
    eventId: string; // ID of the event
    roi: number; // Return on Investment (ROI) calculated for the event
    roiComponents: {
      revenue: number; // Revenue generated by the event
      costs: number; // Costs associated with organizing the event
      // Add any additional ROI components as needed
    };
  }
  
  export default CalendarEventROIAnalysis;
  