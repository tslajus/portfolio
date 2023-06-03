import { TileContainer } from "@/layout";
import { IconPicker } from "@/components";

import styles from "./ContactCard.module.scss";

type ContactCardProps = {
  email: string;
  icon?: Link;
  scratches?: Scratch[];
  className?: ClassName;
};

function ContactCard({ email, icon, scratches, className }: ContactCardProps) {
  return (
    <TileContainer
      scratches={scratches}
      className={`${styles.container} ${className}`}
    >
      <a href={`mailto:${email}`} className={styles.email}>
        {email}
      </a>

      <IconPicker
        icon={icon?.icon}
        linkUrl={icon?.linkUrl}
        className={styles.icon}
      />
    </TileContainer>
  );
}

export default ContactCard;
