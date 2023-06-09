import Link from 'next/link';
import React from 'react';
import classes from './event-item.module.css';
import Button from '../ui/Button';
import ArrowRightIcon from '../icons/arrow-right-icon';
import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import Image from 'next/image';
export default function EventItem({ event }) {
  const { title, image, date, location, id } = event;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');

  return (
    <li className={classes.item}>
      <Image src={'/' + image} alt={title} width={500} height={500} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div>
            <time className={classes.date}>
              <DateIcon />
              {formattedDate}
            </time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
