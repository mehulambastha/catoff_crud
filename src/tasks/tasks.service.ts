import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    return this.tasksRepository.findOne({ where: { id: id } });
  }

  async create(task: Task): Promise<Task> {
    return this.tasksRepository.save(task);
  }

  async update(id: number, task: Partial<Task>): Promise<Task> {
    await this.tasksRepository.update(id, task);
    return this.tasksRepository.findOneBy({ id: id });
  }

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete({ id: id });
  }
}
