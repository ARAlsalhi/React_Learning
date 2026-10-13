// This is for file display the all avater and let the user choose one

import { avatars } from "./avatars";
import styles from "./Avatar.module.css";

/*
selecedAvatar: it is select the current avatar
onSelect: it is function recive the change it avatar when u selected
avatar.map() : it is array  display the 4 avatar
*/

export default function AvatarSelector({ selectedAvatar, onSelect }) {
  return (
    <div>
      <label>اختر شخصيتك</label>

      <div className={styles.avatarOptions}>
        {avatars.map((avatar) => (
          <button
            key={avatar.name}
            type="button"
            className={styles.avatar}
            onClick={() => onSelect(avatar.image)}
          >
            <div className={styles.imageBox}>
              <img src={avatar.image} alt={avatar.name} />

              {selectedAvatar === avatar.image && (
                <span className={styles.check}>✓</span>
              )}
            </div>

            <span>{avatar.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
