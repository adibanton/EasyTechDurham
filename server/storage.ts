import { 
  contacts, 
  newsletters,
  type Contact, 
  type Newsletter,
  type InsertContact, 
  type InsertNewsletter 
} from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  subscribeNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private newsletters: Map<number, Newsletter>;
  private currentContactId: number;
  private currentNewsletterId: number;

  constructor() {
    this.contacts = new Map();
    this.newsletters = new Map();
    this.currentContactId = 1;
    this.currentNewsletterId = 1;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existingNewsletter = Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === insertNewsletter.email
    );
    
    if (existingNewsletter) {
      throw new Error("Email already subscribed");
    }

    const id = this.currentNewsletterId++;
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id,
      subscribedAt: new Date()
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
}

export const storage = new MemStorage();
