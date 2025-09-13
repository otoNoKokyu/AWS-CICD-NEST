import { Controller, Get, Render, Sse } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    const indiaFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      weekday: 'short', year: 'numeric', month: 'short', day: '2-digit'
    });

    const usFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      weekday: 'short', year: 'numeric', month: 'short', day: '2-digit'
    });

    const now = new Date();

    return {
      serverTimeIndia: indiaFormatter.format(now),
      serverTimeUS: usFormatter.format(now),
      tzIndia: 'Asia/Kolkata',
      tzUS: 'America/New_York'
    };
  }
  @Sse('api/sse-time')
  sseTime(): Observable<MessageEvent> {
    const indiaFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      weekday: 'short', year: 'numeric', month: 'short', day: '2-digit'
    });

    const usFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      weekday: 'short', year: 'numeric', month: 'short', day: '2-digit'
    });

    // Emits an event every second
    return interval(1000).pipe(
      map(() => {
        const now = new Date();
        return {
          data: {
            serverTimeIndia: indiaFormatter.format(now),
            serverTimeUS: usFormatter.format(now),
          }
        } as MessageEvent;
      }),
    );
  }
}
