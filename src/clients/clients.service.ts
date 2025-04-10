import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { CreateClientDto } from '../clients/dto/create-client.dto';
import { UpdateClientDto } from '../clients/dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const client = this.clientsRepository.create(createClientDto);
    return this.clientsRepository.save(client);
  }

  async findAll(): Promise<Client[]> {
    return this.clientsRepository.find();
  }

  async findOne(id: number): Promise<Client> {
    const client = await this.clientsRepository.findOne({ where: { id } });
    if (!client) {
      throw new Error(`Client with ID ${id} not found`);
    }
    return client;
  }

async update(id: number, updateClientDto: UpdateClientDto): Promise<Client> {
    const client = await this.clientsRepository.findOne({ where: { id } });
    if (!client) {
        throw new Error(`Client with ID ${id} not found`);
    }
    await this.clientsRepository.update(id, updateClientDto);
    return this.clientsRepository.findOne({ where: { id } }) as Promise<Client>;
}

  async remove(id: number): Promise<void> {
    await this.clientsRepository.delete(id);
  }
}