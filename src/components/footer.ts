import { html } from '@lib/utils';
import { openHours, footerLinks } from '@constants/footer';

export function Footer(): string {
  return html`
    <footer class="hidden-section grid justify-items-center gap-24 bg-[#333]">
      <div
        class="main-container grid grid-cols-4 flex-wrap items-start justify-center gap-12 sm:flex sm:gap-24"
      >
        <section
          class="animated-element fade-bottom col-span-2 grid gap-3 sm:max-w-xs"
        >
          <h2 class="font-poppins font-medium text-white/60">Our policy</h2>
          <p class="leading-normal text-white/30">
          No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the publisher, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.
          </p>
        </section>
        <section
          class="animated-element fade-bottom fade-delay-100 col-span-2 grid gap-3"
        >
          <h2 class="font-poppins font-medium text-white/60">Open hours</h2>
          <ul class="grid justify-start gap-1">
            ${openHours.reduce(
              (acc, { day, open }) =>
                acc +
                html`
                  <li class="grid grid-cols-2 gap-3 text-white/30">
                    <span>${day}</span>
                    <span class="text-center font-poppins">${open}</span>
                  </li>
                `,
              ''
            )}
          </ul>
        </section>
      </div>
      <p
        class="animated-element fade-bottom fade-delay-400 text-center font-poppins"
      >
        Copyright &copy; 2022 by tipiware. All rights reserved.
      </p>
    </footer>
  `;
}
