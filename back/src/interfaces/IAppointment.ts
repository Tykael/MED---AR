export enum AppoitmentStatus {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}

interface IAppointment {
  id: string;
  date: string;
  time: string;
  status: AppoitmentStatus;
}

export default IAppointment;
