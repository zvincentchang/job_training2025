import java.nio.file.*;
import java.io.*;
public class IOTest {

	public static void main(String[] args) throws IOException {
		Path p=Paths.get("c:/temp/f1/f2/f3");
		if( ! Files.exists(p)) {
			Path p2=Files.createDirectories(p);
			System.out.println(p2.toString()+" created...");
		}else {
			System.out.println(p+" is exists");
		}
		Path file=Paths.get("c:/temp/f1/f2/f3/test.txt");
		if( ! Files.exists(file)) {
			Path fp=Files.createFile(file);
			System.out.println(fp.toString()+" created...");
		}else {
			System.out.println(file+" is exists");
		}
		System.out.println(file.getFileName());
		System.out.println(file.getParent());
		System.out.println(Files.isDirectory(file.getFileName()));
		System.out.println(Files.isDirectory(file.getParent()));
	}

}
