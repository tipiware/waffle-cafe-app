import { html } from '@lib/utils';

export function About(): string {
  return html`
    <section
      id="about"
      class="hidden-section grid place-items-center"
      data-index="1"
    >
      <div
        class="main-container flex flex-col items-center justify-between 
               gap-8 lg:flex-row lg:gap-4"
      >
        <div
          class="animated-element fade-left grid max-w-2xl gap-4 lg:max-w-md [&>p]:text-lg"
        >
          <h2 class="section-title mb-4 text-center lg:text-left">
          About Us 
          </h2>
          <p>
          Crafting Waffle Delights Since 1988. At our waffle kiosk, we are passionate about one thing: creating waffle experiences that bring smiles, warmth, and a touch of magic to every bite. Since [Year of Establishment], we've embarked on a journey to redefine the way people enjoy waffles, fusing tradition with innovation to craft the most unforgettable treats.
          </p>
          <p>
          we believe that each waffle tells a story. Our philosophy revolves around the idea that every ingredient, every texture, and every flavor note contributes to an experience that's more than just a meal – it's a symphony of sensations. We meticulously source the finest ingredients, blend time-honored techniques with innovative twists, and infuse our creations with the passion and care that define artisanal craftsmanship.
          </p>
        </div>
        <img
          class="animated-element fade-right viewable-image h-72 w-[448px]
                 rounded-md object-cover duration-500 xl:h-96 xl:w-[576px]"
          src="/assets/kiosk.jpg"
          alt="Founder & Chef"
        />
      </div>
    </section>
  `;
}
