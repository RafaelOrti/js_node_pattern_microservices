#!/bin/bash

# Define backup directory and file name
BACKUP_DIR="/path/to/backup"
BACKUP_FILE="backup-$(date +'%Y%m%d%H%M%S').tar.gz"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Dump MongoDB database to a temporary directory
mongodump --uri="mongodb://username:password@localhost:27017/yourdatabase" --out="$BACKUP_DIR/temp"

# Create a compressed tarball of the backup
tar -zcvf "$BACKUP_DIR/$BACK
