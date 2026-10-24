import * as store from "@/storage/practice-store";
import * as model from "@/practice/model";
import * as backup from "@/storage/practice-backup";
import * as locks from "@/storage/session-lock";
import * as backupActions from "@/storage/backup-actions";
import * as sessions from "@/practice/sessions";
Object.assign(window, {
  practiceQA: {
    ...store,
    ...model,
    ...backup,
    ...sessions,
    ...locks,
    ...backupActions,
  },
});
