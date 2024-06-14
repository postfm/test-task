import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() {
    const leads = await this.httpService.axiosRef.get(
      'https://ivanivan2022ivanov.amocrm.ru/api/v4/leads',
      {
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk5NmY5MDFkYTRiMjhlOTQ5YWNjM2JlYWE2NDc3YTUzNzczOGRhMDhlZmE4ZGVmOTdmYWJlOWY5MDAyZTJmMGE5Njc1MGFjYTA4OTZjN2IxIn0.eyJhdWQiOiJmZDRkZTk1MS1lMGYyLTRlMGItODQzYi1mN2I3ZWRhZDljZTciLCJqdGkiOiI5OTZmOTAxZGE0YjI4ZTk0OWFjYzNiZWFhNjQ3N2E1Mzc3MzhkYTA4ZWZhOGRlZjk3ZmFiZTlmOTAwMmUyZjBhOTY3NTBhY2EwODk2YzdiMSIsImlhdCI6MTcxODM2MjExMSwibmJmIjoxNzE4MzYyMTExLCJleHAiOjE3MTk1MzI4MDAsInN1YiI6IjExMTU1NDQ2IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNzk4Nzg2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMmNlY2U5ZTEtMzFkNS00YTA3LWFjNTAtYzIxN2YyMTAwZGRjIn0.T41Ewt8ZM6GrPCd5nsKr1lCvsOLxYNxV9IETIkM6VOf1bK9fBcKkQk97If4vOljWqqRT9_PFsK9lUaktqICbKLUIMmXnad_Op_Frcwja4HOvj2vqMZ9p8aslSDTt0qIAWtMAKnsje2qH-sehbRH-M_9n5tRn7yu_eILJv-137oPxDbSYC4OCyeL-PTXSIJz0jU6mLPcYFHZ_fzezVmIEuBzRhSCXbXJWJNzJrXQpszLEmNfNyekToZJRoQd97JJ8wJR1mV-nRPIavYi2Gmznu3DCKM1WlWefQA7FCe9ddV9pfcHv_X05z8bysn1lC3xvxCuIYMpzkbP8V6fyLFyeMg',
        },
      },
    );
    console.log(leads.data._embedded.leads);
    leads.data._embedded.leads;
  }
}
