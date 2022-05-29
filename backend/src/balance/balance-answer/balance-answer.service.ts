import { Injectable } from '@nestjs/common';
import { CreateBalanceAnswerDto } from './dto/create-balance-answer.dto';
import { UpdateBalanceAnswerDto } from './dto/update-balance-answer.dto';
import { BalanceAnswerRepository } from '@app/api/balance/balance-answer/balance.answer.repository';

@Injectable()
export class BalanceAnswerService {
  constructor(private balanceAnswerRepo: BalanceAnswerRepository) {}

  async create(createBalanceAnswerDto: CreateBalanceAnswerDto) {
    await this.balanceAnswerRepo.create(createBalanceAnswerDto);
    return 'This action adds a new balanceAnswer';
  }

  findAll() {
    return `This action returns all balanceAnswer`;
  }

  findOne(idx: number) {
    return this.balanceAnswerRepo.findOne(idx);
  }

  update(id: number, updateBalanceAnswerDto: UpdateBalanceAnswerDto) {
    return `This action updates a #${id} balanceAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} balanceAnswer`;
  }
}
