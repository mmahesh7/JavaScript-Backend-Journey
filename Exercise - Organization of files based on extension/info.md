This exercise organizes files in a directory (basepath) by their extension. It reads all files in the folder, and for each file (excluding .js and .json files), it:

Checks if the file has an extension. Then,
If a folder named after the extension exists, it moves the file into that folder.
If the folder does not exist, it creates the folder and then moves the file into it.
For example, a file named image.png would be moved into a png folder.
