import mongoose from 'mongoose';

interface Courselist {
  name: string;
  price?: number;
  rating?: number;
  totalYards?: number;
  totalPar?: number;
  holes?: Holes;
}

interface Holes {
  number: number;
  yards: number;
  par: number;
}

const courseSchema = new mongoose.Schema<Courselist>(
  {
    name: {
      type: String,
      required: true,
    },
    price: { type: Number },
    rating: { type: Number },
    totalYards: { type: Number },
    totalPar: { type: Number },
    holes: {
      number: { type: Number },
      yards: { type: Number },
      par: { type: Number },
    },
  },
  {
    timestamps: true,
  }
);

const golfdb = mongoose.connection.useDb('golfdb');

export const Course = golfdb.model<Courselist>('Course', courseSchema);
