import DisableChatPopup from "./DisableChatPopup"

import styles from "./overlaySettings.module.css"
export default function OverlaySettings(){
    return (
        <div className={styles.overlaySettings}>
            <DisableChatPopup/>
        </div>
    )
}